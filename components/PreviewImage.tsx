import React from 'react'
import styled from 'styled-components'
import { mediaQueriesMax, mediaQueriesMin } from './Common/media'
interface IPreviewSet {
    // srcSet: string
    sizes: string
    src: string
    alt: string

}
export const Image = styled.img`
  width: 100%;
`;
export const ImageBox = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10%;
    ${mediaQueriesMax("tablet")`
    width: 95%;
  `};
   
`
const PreviewImage: React.FC<IPreviewSet> = (props) => {
    return (
        <ImageBox>
            <Image
                //  srcSet={props.srcSet}
                sizes={props.sizes}
                src={props.src}
                alt={props.alt}
            />
        </ImageBox>
    )
}
export default PreviewImage;
