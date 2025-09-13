import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  MapPin, 
  Trees, 
  CreditCard, 
  Calendar, 
  Clock,
  Wheat
} from "lucide-react";
import { Beneficiary } from "@/data/beneficiaryData";

interface BeneficiaryCardProps {
  beneficiary: Beneficiary;
}

export default function BeneficiaryCard({ beneficiary }: BeneficiaryCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{beneficiary.name}</h2>
              <p className="text-sm text-muted-foreground">Gender: {beneficiary.gender}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs px-3 py-1">
            {beneficiary.typeOfRight}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Beneficiary ID Section */}
        <div className="bg-accent/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Beneficiary ID / Patta No.</span>
          </div>
          <p className="text-lg font-mono text-primary">{beneficiary.beneficiaryId}</p>
        </div>

        {/* Location Details */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Location Details</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">Village</p>
              <p className="font-medium text-foreground">{beneficiary.village}</p>
            </div>
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">Block</p>
              <p className="font-medium text-foreground">{beneficiary.block}</p>
            </div>
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">District</p>
              <p className="font-medium text-foreground">{beneficiary.district}</p>
            </div>
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">State</p>
              <p className="font-medium text-foreground">{beneficiary.state}</p>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Forest Rights Details */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trees className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Forest Rights Details</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">Type of Right</p>
              <p className="font-medium text-foreground">{beneficiary.rightFullName}</p>
            </div>
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">Land Area</p>
              <p className="font-medium text-foreground">{beneficiary.landArea}</p>
            </div>
            <div className="bg-muted/50 rounded-md p-3">
              <p className="text-xs text-muted-foreground">Land Use</p>
              <p className="font-medium text-foreground">{beneficiary.landUse}</p>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Linked Schemes */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wheat className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Linked Government Schemes</span>
          </div>
          <div className="space-y-2">
            {beneficiary.linkedSchemes.map((scheme, index) => (
              <div key={index} className="flex items-center justify-between bg-secondary/10 rounded-md p-3">
                <span className="font-medium text-foreground">{scheme.name}</span>
                <span className="text-sm text-muted-foreground">{scheme.details}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Validity Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 bg-muted/50 rounded-md p-3">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Issued On</p>
              <p className="font-medium text-foreground">{beneficiary.issuedOn}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 rounded-md p-3">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Valid Till</p>
              <p className="font-medium text-foreground">{beneficiary.validTill}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}