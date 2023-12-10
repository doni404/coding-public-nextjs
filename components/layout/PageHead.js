import Head from 'next/head';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                {/* <title>{headTitle ? headTitle : "Testo - Pizza Caffe Restaurant ReactJS Template"}</title> */}
                <title>Premium Coconut Pudding | Traditional & Exotic Desserts | coconutpudding.id</title>
                <meta name="description" content="Discover the rich and creamy taste of traditional coconut pudding. Made with the finest ingredients, our coconut pudding offers an exotic blend of flavors that delight with every spoonful. Perfect for dessert lovers and those looking for a taste of tradition. Visit coconutpudding.id to order now!" />
                <meta name="keywords" content="Coconut Pudding, Traditional Desserts, Creamy Coconut Dessert, Exotic Pudding, Indonesian Coconut Pudding, Order Coconut Pudding Online, Homemade Pudding, Premium Desserts, Coconut Delicacies, Coconutpudding.id" />
                <meta property="og:title" content="Premium Coconut Pudding | Traditional & Exotic Desserts" />
                <meta property="og:description" content="Discover the rich and creamy taste of traditional coconut pudding from coconutpudding.id. Perfect for every dessert lover!" />
                <meta property="og:url" content="https://coconutpudding.id" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/banner-coding.jpg" /> {/* Replace with your image path */}
                <link rel="icon" href="/favicon.ico" />
                {/* Add any other tags that you might need here */}

                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />

                <link href="https://use.fontawesome.com/releases/v5.11.0/css/all.css" rel="stylesheet" crossorigin="anonymous" />
            </Head>
        </>
    );
};

export default PageHead;