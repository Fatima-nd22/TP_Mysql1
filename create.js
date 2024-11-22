const db = require ('./db');

function addPersonne(prenom, nom, login, pwd){
    const sql = 'insert into Personne (prenom, nom, login, pwd) values (?,?,?,?)';
    db.query(sql,[prenom, nom, login, pwd],(err,result)=>{

    if (err) {
        console.error('Erreur requete :', err.message);
        return;
      }
      console.log('Insertion réussie à MySQL !');
});}

function delPersonne(ID){
const sql = 'delete from Personne where ID=?';
db.query(sql,[ID],(err,result)=>{
  if (err){
    console.error('Erreur sur la requete suppression:',err.message);
    return;
  }
  console.log('Suppression effectuee avec succee');
});
}

function UpdatePersonne(ID, nom, login) {
  const sql = 'UPDATE Personne SET nom = ?, login = ? WHERE ID = ?';
  db.query(sql, [nom, login,ID], (err, result) => {
    if (err) {
      console.error('Erreur sur la requête de modification:', err.message);
      return;
    }
    console.log('Modification effectuée avec succès');
  });
}



module.exports = {addPersonne,delPersonne,UpdatePersonne};