 let credenciais = {
        "Content-Type": "application/json",
        "DeviceToken": "e6882f1f-cc05.....",
        "Authorization": "Bearen *****"
    };

	function exportTableToCSV(filename) {
		let csv = [];
		let rows = document.querySelectorAll("table tr");

		for (var i = 0; i < rows.length; i++) {
			let row = [], cols = rows[i].querySelectorAll("td, th");

			for (var j = 0; j < cols.length; j++){
				row.push(cols[j].innerText);
				csv.push(row.join(","));
			}
		}
		downloadCSV(csv.join("\n"), filename);
	}

	function downloadCSV(csv, filename) {
		let csvFile;
		let downloadLink;

		csvFile = new Blob([csv], {type: "text/csv"});
		downloadLink = document.createElement("a");
		downloadLink.download = filename;
		downloadLink.href = window.URL.createObjectURL(csvFile);
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
		downloadLink.click();
	}

    $(document).ready(function(){
    
        $('#btn-plate').on('click', function(){
            
            let plate = $("#plate").val();

            let settings = {
                "url": "https://cluster.apigratis.com/api/v2/vehicles/dados",
                "method": "POST",
                "headers": credenciais,
                "data": JSON.stringify({
                    "placa": plate
                })
            };

            $.ajax(settings).done(function (response) {

                console.log(response);

                let veiculo = response.response;
                
                $('table').append(`
                    <tbody>
                        <tr>
                            <td>${veiculo?.logo ? `<img src="${veiculo.logo}" width="100px">` : ''}</td>
                            <td>${veiculo?.ano ? veiculo.ano+"/"+veiculo.anoModelo : ''}</td>
                            <td>${veiculo?.marca ? veiculo.marca : ''}</td>
                            <td>${veiculo?.modelo ? veiculo.modelo : ''}</td>
                            <td>${veiculo?.cor ? veiculo.cor : ''}</td>
                            <td>${veiculo?.extra?.renavam ? veiculo?.extra?.renavam : ''}</td>
                            <td>${veiculo?.municipio ? veiculo.municipio : ''}</td>
                            <td>${veiculo?.uf ? veiculo.uf : ''}</td>
                            <td>${veiculo?.extra?.chassi ? veiculo?.extra?.chassi : ''}</td>
                        </tr>
                    </tbody>
                `);

            });

        });

    });
