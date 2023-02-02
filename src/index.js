import app from './app.js'

app.use((req, res, next) => {
    return res.json('No existe esta api, por favor revisa que la dirección de tu solicitud es correcta')
})

app.listen(3000, (req, res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:3000');
});