var http = require('http');

var server = http.createServer(function(req, res) {
    res.end(find_lantai(19));
});

server.listen(8000);

var find_lantai = (no_loker) => {
    var i = 1;
    var pembagi = 5;
    var total_loker = 5;
    
    if(no_loker <= 0)
    {
        return 'Masukkan data yang valid';
    }
    else
    {
        if(no_loker <= pembagi){
            return 'Lantai 1';
        }
    
        while(pembagi <= no_loker)
        {
            if(no_loker <= total_loker){
                return 'Lantai '+i;
            }
    
            i++;
    
            if(pembagi == 7)
            {
                pembagi = 5;
            }
            else{
                pembagi++;
            }
    
            total_loker = total_loker + pembagi;
        }
    }
}

console.log(find_lantai(37));