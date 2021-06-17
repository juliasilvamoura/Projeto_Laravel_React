
import http from '../util/banco';

export const findAllCliente = async (paginaAtual,pageSize,dir,props,search) => {
    return(
       http.get('/cliente/listar', {
           params:{
               paginaAtual, 
               pageSize,
               dir,
               props,
               search
           },
       }).then( res => {
           return res.data;
       })
    )
}

export const findClienteByTd = async (id) => {
    return (
        http.get(`/cliente/alterar/${id}`)
        .then( res => {
            return res.data
        }).catch(error => {
            return error.res;
        })
    )
}


export const createCliente = async ( cliente ) => {
    return(
        http({
            method:'post',
            url:'/cliente/salvar',
            data: cliente,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res =>{
            return res.data
        })
    )
}


export const updateCliente = async (id, cliente ) => {
    return(
        http({
            method:'post',
            url:`cliente/update/${cliente.id}`,
            data: cliente,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res =>{
            console.log(res.data);
            return res.data
        }).catch(error => {
            return error.response
        })
    )
}