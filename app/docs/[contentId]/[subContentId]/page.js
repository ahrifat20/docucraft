import ContentDisplay from "@/components/ContentDisplay";

export default function page({params: {subContentId}}){
    return (
        <>
          <ContentDisplay id={subContentId} />
        </>
    );
}