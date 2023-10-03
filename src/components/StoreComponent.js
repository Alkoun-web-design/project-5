import Storefront from './Storefront';
import Header from './Header';
import ProductPage from './ProductPage';
import OrderForm from './OrderForm';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';
import AboutUs from './AboutUs';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Careers from './Careers';
import Feedback from './Feedback';
import ErrorPage from './ErrorPage';
import ReturnsAndRefunds from './ReturnsAndRefunds';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCart } from "medusa-react";
import { useUpdateLineItem } from "medusa-react";
import { useCreateLineItem } from "medusa-react";


export default function StoreComponent() {

    const [productPage, setProductPage] = useState({
        name: null,
        image: null,
        options: null,
        variants: null,
        handle: null,
        variantId: null,
        variantLabel: null,
        quantity: 1,
        price: null
        });
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [badgeCounter, setBadgeCounter] = useState(0);
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);    
    const { cart, createCart } = useCart()

    useEffect(() => {
        handleCreateCart();
    },[])

    const handleCreateCart = () => {
        createCart.mutate(
            {
                region_id:cart.region_id,
                email:cart.email
            },
            {
                onSuccess: ({ cart }) => {
                localStorage.setItem("cart_id", cart.id);
                },
            }
        )
    }

    const cartId = cart.id;
    
    const createLineItem = useCreateLineItem(cartId)
    const updateLineItem = useUpdateLineItem(cartId)

    // const handleAddItem = () => {
    //     createLineItem.mutate(
    //         {
    //             variant_id:productPage.variantId,
    //             quantity:productPage.quantity,
    //         },
    //         {
    //             onSuccess: ({ cart }) => {
    //                 console.log(cart, cart.items.length);
    //             },
    //         }
    //     );
    // };

    const handleAddItem = () => {
        const items = cart.items;
        for (let item of items){
            if (item.variant_id !== productPage.variantId){
                createLineItem.mutate(
                    {
                        variant_id:productPage.variantId,
                        quantity:productPage.quantity,
                    },
                    {
                        onSuccess: ({ cart }) => {
                            console.log(cart, cart.items.length);
                        },
                    }
                );
            } else {
                updateLineItem.mutate({
                    line_id: productPage.variantId,
                    quantity: productPage.quantity,
                })
            }
        }  
    };

    const handleUpdateItem = () => {
        updateLineItem.mutate({
            line_id: productPage.variantId,
            quantity: productPage.quantity,
        })
    }

    return (
        <>
            <Header 
                setIsShoppingCartOpen= {setIsShoppingCartOpen} 
                setIsCategoriesOpen={setIsCategoriesOpen}
                badgeCounter={badgeCounter}/>
            <Routes>
                <Route path="/*" element={<Storefront  
                    isCategoriesOpen={isCategoriesOpen} 
                    setIsCategoriesOpen={setIsCategoriesOpen}
                    productPage={productPage} 
                    setProductPage={setProductPage}/>}/>
                <Route path={`${productPage.handle}`} element={<ProductPage 
                    productPage={productPage} 
                    setProductPage={setProductPage}
                    handleAddItem={handleAddItem}
                    cart={cart}/>}/>
                <Route path="about-us" element={<AboutUs/>}/>
                <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
                <Route path="returns-and-refunds" element={<ReturnsAndRefunds/>}/>
                <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="careers" element={<Careers/>}/>
                <Route path="feedback" element={<Feedback/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <ShoppingCart
                    isShoppingCartOpen={isShoppingCartOpen} 
                    setIsShoppingCartOpen={setIsShoppingCartOpen} 
                    productPage={productPage}
                    setIsOrderFormOpen={setIsOrderFormOpen}
                    handleAddItem={handleAddItem}
                    setBadgeCounter={setBadgeCounter}
                    badgeCounter={badgeCounter}
                    cart={cart}
                    cartId={cartId}
                />
                <OrderForm 
                    isOrderFormOpen={isOrderFormOpen}
                    setIsOrderFormOpen={setIsOrderFormOpen}
                />
            <Footer />
        </>
    );
}