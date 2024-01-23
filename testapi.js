// const functions = require('@google-cloud/functions-framework');

functions.http('kursvalutasing', (req, res) => {

messages="ini adalah respon webhook2";
  const jsonResponse ={
	fulfillment_response: {
		messages: [
    {
      text:{
        
        text:[messages],
      },
    },
    ],
  },
  };
  
  res.status(200).send(jsonResponse);
});
