import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowLeft, Shield } from "lucide-react";
import { getBeneficiaryById } from "@/data/beneficiaryData";
import BeneficiaryCard from "@/components/BeneficiaryCard";
import { generatePDF } from "@/utils/pdfExport";
import { Link } from "react-router-dom";

export default function BeneficiaryDetails() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/" replace />;
  }
  
  const beneficiary = getBeneficiaryById(id);
  
  if (!beneficiary) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Beneficiary Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The beneficiary ID you scanned is not valid or not in our system.
          </p>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleDownloadPDF = () => {
    generatePDF(beneficiary);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <h1 className="text-xl md:text-2xl font-semibold">FRA Beneficiary Details</h1>
            </div>
            <Link to="/">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <ArrowLeft className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <BeneficiaryCard beneficiary={beneficiary} />
        
        {/* Action Buttons */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleDownloadPDF}
            size="lg"
            className="gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <FileDown className="w-5 h-5" />
            Download Report (PDF)
          </Button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-primary">VanTerra</span> – Smart FRA Atlas
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              This is an official document generated from the Forest Rights Act database
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}