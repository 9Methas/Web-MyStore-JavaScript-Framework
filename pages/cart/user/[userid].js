import useSWR from "swr";
import Layout from "../../../components/layout";
import axios from "axios";
import { useRouter } from "next/router";

async function fetcher(url) {
    const res = await axios.get(url);
    const cart = res.data[0];
    const data = cart.products.map(async (prod) => {
        const res = await axios.get(
            "https://fakestoreapi.com/products/" + prod.productId
        );
        const prodDetails = { ...res.data, ...prod };
        return prodDetails;
    });

    console.log(await Promise.all(data));

    return await Promise.all(data);
}

export default function CartPage() {
    const router = useRouter();
    console.log(router);
    const { data, error } = useSWR(
        "https://fakestoreapi.com/carts/user/" + router.query.userid,
        fetcher
    );

    if (error) return <Layout>{error}</Layout>;
    if (!data) return <Layout><div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
  </div></Layout>;

    return (
        <Layout>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Sum</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((prod) => (
                        <tr>
                            <th scope="row"> {prod.title}</th>
                            <th>{prod.price}</th>
                            <th>{prod.quantity}</th>
                            <th>{prod.price*prod.quantity}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}
