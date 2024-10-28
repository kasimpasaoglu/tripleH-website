import { ShieldCheckIcon } from "@heroicons/react/16/solid";
import { FireIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SubArticle() {
    const h = useTranslations('Home');
    const t = h.raw('subArticle'); // Artık doğrudan nesne olarak alıyoruz

    return (
        <article className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 max-w-7xl relative mb-10 ">
            <div className="col-span-1 md:col-span-2 md:row-span-2 h-full relative ">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 md:rounded-l-full">
                    <ShieldCheckIcon className="h-20 w-20 text-alternatebright" />
                </div>
                <Image
                    src={t.leftImg}
                    alt="SubArticle Main"
                    fill
                    sizes="(max-width: 500px) 50vw,(max-width: 1024px) 60vw, 70vw"
                    style={{ objectFit: "cover" }}
                    className="h-full md:rounded-l-full relative"
                />
            </div>
            <div className="flex flex-col justify-between items-center gap-2 h-full relative bg-alternatebright text-secondary p-10">
                <SparklesIcon className="h-10 w-10" />
                <h3 className="mb-3 text-secondary">{t.topTitle}</h3>
                <p className="text-secondary">{t.topDescription}</p>
            </div>
            <div className="md:row-span-2 h-full relative" >
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 md:rounded-r-3xl">
                    <FireIcon className="h-20 w-20 text-alternatebright" />
                </div>
                <Image
                    src={t.rightImg}
                    alt="SubArticle Right"
                    fill
                    sizes="(max-width: 500px) 50vw,(max-width: 1024px) 60vw, 70vw"
                    style={{ objectFit: "cover" }}
                    className="h-full md:rounded-r-3xl relative"
                />
            </div>
            <div className="flex flex-col justify-between items-center gap-2 h-full relative bg-secondary p-10 text-alternatebright">
                <UserGroupIcon className="h-10 w-10" />
                <h3 className="mb-3 text-alternate">{t.botTitle}</h3>
                <p className="text-alternate">{t.botDescription}</p>
            </div>
        </article>
    );
}
