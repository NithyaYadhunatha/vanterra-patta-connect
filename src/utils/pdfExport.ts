import { Beneficiary } from "@/data/beneficiaryData";

export const generatePDF = (beneficiary: Beneficiary) => {
  // Create a printable HTML content
  const printContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>FRA Beneficiary Report - ${beneficiary.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Poppins', sans-serif;
            padding: 40px;
            color: #1B4332;
            line-height: 1.6;
          }
          
          .header {
            text-align: center;
            border-bottom: 3px solid #1B4332;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          
          .header h1 {
            color: #1B4332;
            font-size: 28px;
            margin-bottom: 10px;
          }
          
          .header .subtitle {
            color: #666;
            font-size: 14px;
          }
          
          .section {
            margin-bottom: 25px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
          }
          
          .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #1B4332;
            margin-bottom: 12px;
            border-bottom: 2px solid #95D5B2;
            padding-bottom: 5px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 10px;
          }
          
          .info-item {
            padding: 8px;
            background: white;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
          }
          
          .info-label {
            font-size: 12px;
            color: #666;
            margin-bottom: 3px;
          }
          
          .info-value {
            font-size: 14px;
            font-weight: 500;
            color: #1B4332;
          }
          
          .schemes-list {
            list-style: none;
            padding: 0;
          }
          
          .schemes-list li {
            padding: 10px;
            background: white;
            margin-bottom: 8px;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
          }
          
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #1B4332;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
          
          .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 120px;
            color: rgba(149, 213, 178, 0.1);
            font-weight: bold;
            z-index: -1;
            pointer-events: none;
          }
          
          @media print {
            body {
              padding: 20px;
            }
            
            .section {
              break-inside: avoid;
            }
            
            .watermark {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="watermark">FRA VERIFIED</div>
        
        <div class="header">
          <h1>FRA Beneficiary Report</h1>
          <div class="subtitle">Forest Rights Act - Official Certificate</div>
        </div>
        
        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Name</div>
              <div class="info-value">${beneficiary.name}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Gender</div>
              <div class="info-value">${beneficiary.gender}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Beneficiary ID</div>
              <div class="info-value">${beneficiary.beneficiaryId}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Type of Right</div>
              <div class="info-value">${beneficiary.rightFullName} (${beneficiary.typeOfRight})</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Location Details</div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Village</div>
              <div class="info-value">${beneficiary.village}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Block</div>
              <div class="info-value">${beneficiary.block}</div>
            </div>
            <div class="info-item">
              <div class="info-label">District</div>
              <div class="info-value">${beneficiary.district}</div>
            </div>
            <div class="info-item">
              <div class="info-label">State</div>
              <div class="info-value">${beneficiary.state}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Land Details</div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Land Area</div>
              <div class="info-value">${beneficiary.landArea}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Land Use</div>
              <div class="info-value">${beneficiary.landUse}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Issued On</div>
              <div class="info-value">${beneficiary.issuedOn}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Valid Till</div>
              <div class="info-value">${beneficiary.validTill}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Linked Government Schemes</div>
          <ul class="schemes-list">
            ${beneficiary.linkedSchemes.map(scheme => `
              <li>
                <span>${scheme.name}</span>
                <span>${scheme.details}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="footer">
          <p>Generated on: ${new Date().toLocaleDateString('en-IN', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}</p>
          <p style="margin-top: 10px;">Powered by VanTerra – Smart FRA Atlas</p>
          <p style="margin-top: 5px; font-size: 10px;">This is a computer-generated document. No signature is required.</p>
        </div>
      </body>
    </html>
  `;

  // Open print dialog
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      printWindow.print();
    };
  }
};