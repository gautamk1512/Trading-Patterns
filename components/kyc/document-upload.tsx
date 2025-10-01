"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

interface DocumentUploadProps {
  title: string
  description: string
  documentType: "pan" | "aadhaar-front" | "aadhaar-back"
  onUpload: (file: File, type: string) => void
  status?: "pending" | "uploaded" | "verified" | "rejected"
}

export function DocumentUpload({
  title,
  description,
  documentType,
  onUpload,
  status = "pending",
}: DocumentUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setUploadedFile(file)
      onUpload(file, documentType)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setUploadedFile(file)
      onUpload(file, documentType)
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case "uploaded":
        return (
          <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
            Uploaded
          </Badge>
        )
      case "verified":
        return (
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            Verified
          </Badge>
        )
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case "verified":
        return <CheckCircle className="w-5 h-5 text-success" />
      case "rejected":
        return <AlertCircle className="w-5 h-5 text-destructive" />
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {status === "verified" ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <p className="text-success font-medium">Document verified successfully</p>
            <p className="text-sm text-muted-foreground mt-2">Verified on {new Date().toLocaleDateString()}</p>
          </div>
        ) : (
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive
                ? "border-primary bg-primary/5"
                : uploadedFile
                  ? "border-success bg-success/5"
                  : "border-border hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />

            {uploadedFile ? (
              <div>
                <p className="text-success font-medium mb-2">File uploaded successfully</p>
                <p className="text-sm text-muted-foreground">{uploadedFile.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            ) : (
              <div>
                <p className="text-foreground font-medium mb-2">Drag and drop your document here, or click to browse</p>
                <p className="text-sm text-muted-foreground mb-4">Supports: JPG, PNG, PDF (Max 5MB)</p>
              </div>
            )}

            <Input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileSelect}
              className="hidden"
              id={`file-${documentType}`}
            />
            <Label htmlFor={`file-${documentType}`}>
              <Button variant="outline" className="cursor-pointer bg-transparent" asChild>
                <span>Choose File</span>
              </Button>
            </Label>
          </div>
        )}

        {documentType === "aadhaar-front" && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Ensure your Aadhaar front side is clearly visible with all details readable.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
