const conection = require('../database/conection');

module.exports ={

    async index(request, response){

        const {page}= request.query;

        const [count] = await conection('incidents').count();//pegando todos os itens registrados

        const incidentslist = await conection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ongs_Id')       
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

      
        response.header('X-Total-Count', count['count(*)']) //passando no cabeçalho quantos items há no total
        //notar que se passa como HEADER, não como HEADER

        return response.json(incidentslist)
    },
    async listforOngs(request, response){
        const ongs_Id = request.headers.authorization;

        const cases = await conection('incidents')
        .where('ongs_Id', ongs_Id)
        .select('*');
        return response.json(cases);
    },
    async create(request, response){
        const { title, description, values} = request.body;
        const ongs_Id = request.headers.authorization;
       

       const [id] = await conection('incidents').insert({
            title,
            description,
            values,
            ongs_Id
        })
        return response.json({id})
    },

    async delete(request, response){

        const { id } = request.params;
        const ongs_Id = request.headers.authorization;

        const incidents = await conection('incidents')
        .where('id', id)
        .select('ongs_id')
        .first()
        
        if(incidents.ongs_Id !== ongs_Id){
            return response.status(401).json({ error: "Operação não permitida"})
        }

        await conection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

}