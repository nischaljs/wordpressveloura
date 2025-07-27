<?php

namespace Depicter\Document\Models\Traits;

trait HasDocumentTypeTrait
{
    /**
     * @var int|null
     */
    protected $documentType;

    /**
     * Gets document Type
     *
     * @return int|null
     */
    public function getDocumentType() {
        return $this->documentType;
    }

    /**
     * Checks if document type is a certain type
     *
     * @return bool
     */
    public function isDocumentType( $type ) {
        return $this->documentType === $type;
    }

    /**
     * Sets document Type
     *
     * @param int $documentType
     *
     * @return mixed
     */
    public function setDocumentType( $documentType = 1 ) {
        if( $documentType ){
            $this->documentType = $documentType;
        }
        return $this;
    }
}
