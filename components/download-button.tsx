"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle, AlertCircle } from "lucide-react"

interface DownloadButtonProps {
  sessionId: string
  productId: string
  productName: string
  artist: string
}

export function DownloadButton({ sessionId, productId, productName, artist }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadStatus('idle')
    setErrorMessage('')

    try {
      // In a real app, you'd verify the purchase first
      // For now, we'll directly download the image file from the public folder
      const imageUrl = `/andean-sunset-oil.png` // This would be dynamic based on productId
      
      // Create a temporary link and trigger download
      const a = document.createElement('a')
      a.href = imageUrl
      a.download = `${productName} by ${artist}.jpg`
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      setDownloadStatus('success')
      
      // Reset success status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle')
      }, 3000)

    } catch (error) {
      console.error('Download error:', error)
      setDownloadStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Download failed')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full rounded-xl bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-white"
      >
        {isDownloading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Preparing Download...
          </>
        ) : downloadStatus === 'success' ? (
          <>
            <CheckCircle className="h-4 w-4 mr-2" />
            Download Complete!
          </>
        ) : (
          <>
            <Download className="h-4 w-4 mr-2" />
            Download High-Resolution Artwork
          </>
        )}
      </Button>
      
      {downloadStatus === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{errorMessage}</span>
        </div>
      )}
      
      {downloadStatus === 'success' && (
        <div className="flex items-center space-x-2 text-green-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>Your artwork has been downloaded successfully!</span>
        </div>
      )}
    </div>
  )
}
