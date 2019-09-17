import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types';
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

ListasNoticias.prototype = {
    noticias : PropTypes.array.isRequired
}
export default ListasNoticias