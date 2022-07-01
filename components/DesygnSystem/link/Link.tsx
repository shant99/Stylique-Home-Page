import styles from './link.module.css'

function Link({
    path = '#' ,
    name = 'Link' , 
    dissabled = false
}:any){

    return (
        <a href={path}
            className={  styles['link'] + ' ' + styles[`is${dissabled}`]}
        >{name}</a>
    )
}

export default Link