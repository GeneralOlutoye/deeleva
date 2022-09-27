import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Does Partnering with Deleeva mean the company takes possession of my bike/car?",
            content: `No, your bike is yours to operate with. You simply get to operate under the umbrella of Gokada Nipost Licence.`,
        },
        {
            title: "What is your payment plan",
            content:
                "The remittance is commissioned based.",
        },
        {
            title: "How many orders do i get daily?",
            content: `We can provide as many orders as you would like to do, given your riders stay online. Typically, we ask the riders to do at least 10 orders each day. `,
        },
        {
            title: "How much would i make daily as a Deleeva",
            content: <p>You should be earning an average of N15,000-20,000 per rider each day, with the possibility of earning higher than this average.</p>,
        },
    ],
};


const styles = {
    bgColor: '#0e0e0f',
    titleTextColor: "#fff",
    titleMarginBottom: "30px",
    rowTitleColor: "#fff",
    rowContentPaddingBottom: "10px",
    rowContentPaddingTop: "10px",
    rowContentColor: 'grey',
    fontSize: '10px',
    rowContentPaddingLeft: '50px',
    rowMarginTop: "30px",
    arrowColor: "grey",
    borderLeft: "2px solid white"
};

const config = {
    animate: true,
    tabFocus: false
};

export const FAQ = ()=>{
    return(
        <Faq data={data} styles={styles} config={config} />
    )
}

