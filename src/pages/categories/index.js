import CategoriesPage from "@/components/templates/CategoriesPage/CategoriesPage";

const Categories = ({ data }) => {
    return (
        <CategoriesPage data={data} />
    )
}

export default Categories

export async function getServerSideProps(context) {
    const { query:{difficulty,time} } = context
    console.log(difficulty)
    console.log(time)

    const req = await fetch(`${process.env.BASE_URL}/data`);
    const data = await req.json()

    const filteredData = data.filter(item => {
        const difficultyResult = item.details.filter(
            (detail) => (detail.Difficulty && detail.Difficulty === difficulty))
        const timeResult = item.details.filter((detail) => {
            const cookingTime = detail["Cooking Time"] || "";
            const [timeDetail] = cookingTime.split(" ");
            if (time === 'less' && timeDetail && +timeDetail <= 30) {
                return detail
            }else if (time === 'more' && timeDetail && +timeDetail > 30) {
                return detail
            }

        })
        
        if (time && difficulty && timeResult.length && difficultyResult.length) {
            return item
        }else if (!time && difficulty && difficultyResult.length) {
            return item
        }else if (time && !difficulty && timeResult.length) {
            return time
        }
    })
    return {
        props: {data:filteredData}
    }
}