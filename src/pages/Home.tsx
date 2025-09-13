import { Shield, QrCode, Nfc, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  const sampleBeneficiaries = [
    { id: "00457", name: "Smt. Kaveri Bai", village: "Banjari" },
    { id: "00458", name: "Shri Ramesh Kumar", village: "Patalkot" },
    { id: "00459", name: "Smt. Phoolbai Maravi", village: "Ghughri" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-10 h-10" />
            <h1 className="text-2xl md:text-3xl font-bold">FRA Beneficiary Portal</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Forest Rights Act Digital Verification System
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Scan QR codes or use NFC to instantly verify and access FRA beneficiary details
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <QrCode className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-2">QR Code Scanning</h3>
                <p className="text-muted-foreground">
                  Scan the QR code on FRA patta documents to instantly access beneficiary information
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <Nfc className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-2">NFC Technology</h3>
                <p className="text-muted-foreground">
                  Tap NFC-enabled cards or devices for quick and secure verification
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Demo Beneficiaries
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Click on any beneficiary below to view their details
            </p>
            
            <div className="grid gap-4">
              {sampleBeneficiaries.map((beneficiary) => (
                <Link key={beneficiary.id} to={`/beneficiary/${beneficiary.id}`}>
                  <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{beneficiary.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Village: {beneficiary.village} | ID: FRA/MP/2023/{beneficiary.id}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Powered by <span className="font-semibold text-primary">VanTerra</span> – Smart FRA Atlas
            </p>
            <p className="text-xs text-muted-foreground">
              A Digital India Initiative for Forest Rights Act Beneficiaries
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}