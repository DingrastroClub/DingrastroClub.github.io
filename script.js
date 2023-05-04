function verifyCertificate(){
    var certificateId = document.getElementById("certificate-id").value;

    // TODO: Replace this with actual certificate verification logic
    var certificateData = [{
        id: "2023-DINGRASTRO-WIPD",
        name: "Amal Biju",
        position: "DAPY 2023"
        
    },
    {
        id: "2023-DINGRASTRO-3JG1",
        name: "Amal Biju",
        position: "Shortlisted DAPY 2023"
    },
    {
        id: "2023-DINGRASTRO-OQJ2",
        name: "Mrs Chitra Singh",
        position: "Shortlisted DAPY 2023"
    },
    {
        id: "2023-DINGRASTRO-1HSG",
        name: "Sarthak Bondre",
        position: "Shortlisted DAPY 2023"
    },
    {
        id: "2023-DINGRASTRO-2BEH",
        name: "Shivam Sharma",
        position: "Shortlisted DAPY 2023"
    },
    {
        id: "2023-DINGRASTRO-SDHK",
        name: "Katyayni Parkewar",
        position: "Shortlisted DAPY 2023"
    },
    {
        id: "2023-DINGRASTRO-72TH",
        name: "Kshitij Bhanushali",
        position: "Shortlisted DAPY 2023"
    }
];

    var certificate = certificateData.find(cert => cert.id === certificateId);
    if (certificate) {
        displayCertificateDetails(certificate);
    } else {
        alert("Certificate not found. Please check the ID and try again.");
    }
}

function displayCertificateDetails(certificateData) {
    var certificateDetails = document.getElementById("certificate-details");
    certificateDetails.innerHTML = "";

    var checkmarkIcon = document.createElement("img");
    checkmarkIcon.setAttribute("src", "assets/certificate2023/check.png");
    checkmarkIcon.style.width = "15px";
    checkmarkIcon.style.height = "15px";
    checkmarkIcon.setAttribute("alt", "Verified"); 
    certificateDetails.appendChild(checkmarkIcon);

    var heading = document.createElement("h3");
    var name = document.createTextNode(certificateData.name);
    heading.appendChild(name);
    certificateDetails.appendChild(heading);

    var courseParagraph = document.createElement("p");
    var courseText = document.createTextNode("Position: " + certificateData.position);
    courseParagraph.appendChild(courseText);
    certificateDetails.appendChild(courseParagraph);

    var downloadButton = document.createElement("button");
    var downloadText = document.createTextNode("Download Certificate");
    downloadButton.appendChild(downloadText);
    downloadButton.onclick = function () {
        // TODO: Replace this with actual certificate download logic
        var pdfUrl = "assets/certificate2023/" + certificateData.id + ".pdf";

        // Redirect the user to the PDF file
        window.location.href = pdfUrl;
    };

    certificateDetails.appendChild(downloadButton);

    certificateDetails.style.display = "block";
}
