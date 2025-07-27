<?php
namespace Depicter\Controllers\Ajax;

use Depicter\GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;
use WPEmerge\Requests\RequestInterface;

class PluginDeactivationController
{
	/**
	 * Send deactivation feedback
	 *
	 * @return ResponseInterface
	 */
	public function sendFeedback( RequestInterface $request, $view){

		if ( empty( $request->body('issueRelatesTo', '') ) ) {
			return \Depicter::json([
				'errors'   => "Empty deactivation reason"
			])->withStatus(400 );
		}

		$feedback = [
			'issueType'         => 'deactivation',
			'issueRelatesTo'    => sanitize_text_field( wp_unslash( $request->body('issueRelatesTo', '') ) ),
			'userDescription'   => ! empty( $request->body('userDescription', '') ) ? sanitize_text_field( wp_unslash( $request->body('userDescription', '') ) ) : ''
		];

		try {
			if ( \Depicter::deactivationFeedback()->sendFeedback( $feedback ) ) {
				return \Depicter::json([
					"hits" => 1,
					'message'   => "Feedback has been sent successfully"
				])->withStatus(200 );
			} else {
				return \Depicter::json([
					'errors'   => "Error while sending feedback, please try again later"
				])->withStatus(400 );
			}
		} catch( GuzzleException $e ) {
			return \Depicter::json([
               'errors'   => "Error while sending feedback, connection error..."
            ])->withStatus(400 );
		}

	}
}
