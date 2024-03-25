const express = require('express');
const router = express.Router();
const axios = require('axios');
const others = require('axios');


router.get('/test',(req,res) => {
    res.json([{
        'path':'HOME'
    },{'chek':router}])
})

router.get("/platformlistpublic", async (req, res) => {
    console.log("la requete platformlistpubilc est arrivé coté gateway");
    try {
      console.log(
        "Début du traitement de la requête platformlistpubilc côté gateway"
      );
  
    
        url = `${process.env.PUBLICDATA_URL}/platformlistpublic`;
        console.log('voici url : ',url)
        console.log('voici axios : ',axios)
  
      
     const response = await axios.get(url, {});
     res.status(response.status).send(response.data);
     


    } catch (error) {
      console.error(
        "Erreur lors du traitement de la requête platformlistpubilc côté gateway :",
        error
      );
      res
        .status(500)
        .send({"errorm":"Erreur lors de la récupération de la liste des plateformes publiques","error":error

        }
          
        );
    }
  });


module.exports = router;
