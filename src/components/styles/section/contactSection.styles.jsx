import styled,{keyframes} from "styled-components";

const float = keyframes`
    0%{
        transform: translate(0px, 0px);
    }
    
    70%{
        transform: translate(0px, 20px);
    }
`

export const ContactsSection  = styled.section`
    min-height: 90vh;
    width: 100%;
    padding: 30px;
    margin-bottom: 30px;
 
`;

export const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: .4em 0 ;


    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`;
export const ContactInfo = styled.div`
    flex: 1;
    font-family: "Poppins",sans-serif;
    font-size: 20px;

    p{
        padding: 0;
        margin-bottom: 12px;
        text-align: justify;
    }

    div{
        display: flex;
        align-items: center;

        a{
           display :flex ;
           align-items: center;
           margin: 10px 20px 18px 0;

           svg{
            margin-right: 10px;
           }
        }

        @media screen and (max-width:768px) {
            align-items: flex-start;
            flex-direction: column;

            a{
                margin: 0 0 12px 0;
                font-size: 20px;
            }
        }
    }


`; 
export const ContactImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
   
    img{
        width: 60%;
        animation: ${float} 3s ease-in-out infinite;

    }

    @media screen and (max-width:768px) {
        justify-content: flex-start;
        margin-bottom: 20px 0;
    }
 
`;

 
