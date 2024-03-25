import ContentDisplay from "@/components/ContentDisplay";

export default function page({params: {contentId}}){
    return (
        <>
          <ContentDisplay id={contentId} />
        </>
    );
}