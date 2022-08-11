import { Product } from "../resource/Product";

export class Products extends Product {

    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        this.getProducts(props);
/*        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        this.setState({ data: json });
        */
    }

    getProducts(props){
        if(Object.keys(this.state.data).length === 0){
            this.state.handler = async (response) => {
                const products = [];
                if(Object.keys(response).length){
                    response.forEach( product => { products.push( product ); });
                }
                this.setState( { data: products } );
            };
            this.get(props);
        }   
    }
    
    render(){
        if(Object.keys(this.state.data).length !== 0){
            return (
                <>
                {
                   this.state.data.map( (product,index) => { 
                        return <Product
                                {...this.props}
                                key={product.id}
                                id={product}  
                                data={product}
                                buttonLabel={'BUY NOW'} />
                        
                    })   
                }
                </>
            );
        }

        return (<></>);
        
    }
    
}