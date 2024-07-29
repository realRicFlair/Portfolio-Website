import { HeadingDivider } from "./ui/HeadingDivider"

export default function AboutSection(){
    return (
        <section id="about" className="section">
            <HeadingDivider title="About Me"/>
            <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                <p className="text-lg"> My name is Adi, a CS major currently studying at Simon Fraser University </p>
                <p>
                    From highschool to university, I have always had a deep passion for programming, and tangentially, developed a passion for math.<br />
                    Ever since highschool, iv consistently been engaged in learning new concepts and techniques around both fields
                </p>

            </div>
        </section>
    )
}