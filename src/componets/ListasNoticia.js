import React from 'react'
import Noticia from './Noticia'
const ListasNoticias = ({noticias})=>(
        <div className="row">
            {noticias.map(noticia=>(
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )


export default ListasNoticias