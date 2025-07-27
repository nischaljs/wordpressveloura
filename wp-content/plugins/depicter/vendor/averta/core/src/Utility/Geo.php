<?php

namespace Averta\Core\Utility;

class Geo
{
    /**
     * Retrieves original IP of a request
     *
     * @return string
     */
    public static function getOriginalIp(){
        $headers = [
            'HTTP_CF_CONNECTING_IP', // Cloudflare proxy
            'HTTP_X_FORWARDED_FOR',  // Common forwarded header (can be a comma-separated list)
            'HTTP_X_REAL_IP',        // Nginx direct IP forwarding
            'HTTP_CLIENT_IP',
            'HTTP_X_CLIENT_IP',
            'HTTP_TRUE_CLIENT_IP',   // Fallback client IP header
            'HTTP_FASTLY_CLIENT_IP',
            'HTTP_X_CLUSTER_CLIENT_IP',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',        // May contain more structured IP forwarding information
            'REMOTE_ADDR',
        ];

        foreach ($headers as $header) {
            if (!empty($_SERVER[$header])) {
                // Header may contain multiple IPs, first one is the original client IP
                $ipAddresses = explode(',', $_SERVER[$header]);

                foreach ($ipAddresses as $ip) {
                    $ip = trim($ip);
                    // Reject private and reserved IP ranges and ensure the retrieved IP is public
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                        return $ip;
                    }
                }
            }
        }

        return '0.0.0.0'; // if no valid IP is found
    }

}
