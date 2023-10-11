import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    /* 
    Player List 클릭 시 List 컴포넌트로 이동
    => Link 사용
    */
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <img src='https://i.namu.wiki/i/_aji9vf2cTYDJVs1GJVlVX3ZTOn4Nu0Bv5_MAcWOipW29JDg330OE9kIL7353TIYyXE4Skdz5-IEts1CZSSlcg.webp'
                width='100%' />
            <Link to="/list" style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'black',
                backgroundColor: 'lightGray',
                padding: '20px 30px',
                borderRadius: '20px'
            }}>Player List</Link>
        </div>
    )
}

export default Main