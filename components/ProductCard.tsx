import React from 'react'
import Button from './Button'
import { H3 } from './Common/Typography'

interface IProductCardProps {
    imageUrl: string
    title: string
    onClick: () => void
}
const ProductCard: React.FC<IProductCardProps> = (props) => {
    return (
        <div>
            <img src={props.imageUrl} alt="" />
            <H3>{props.title}</H3>
            <Button onClick={props.onClick}> buy online</Button>
        </div>
    )
}

export default ProductCard
