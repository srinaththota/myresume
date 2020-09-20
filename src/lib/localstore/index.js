import { InMemoryCache , makeVar } from '@apollo/client';

export const cache = new InMemoryCache({

    typePolicies:{
        fields:{
            skillsDetails(){
               return  skillDetailsIdVar();
            },
            certDetails(){
                return certDetailsVar();
            },
        }
    }
})

export const skillDetailsIdVar=makeVar();
export const certDetailsVar=makeVar();

