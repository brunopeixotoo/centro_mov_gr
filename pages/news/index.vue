<template>
    <section>
        <NuxtImg
            src="/img/img-banner-school.jpeg"
            class="w-full" alt="Imagem Cia"
        />

        <h1 class="uppercase font-bold text-2xl m-10">
            Novidades
        </h1>

        <div class="flex flex-col gap-5 m-10 drop-shadow-lg">
            <h1 class="font-semibold text-gray-900 text-lg mt-5">
                Um Encanto de Natal
            </h1>
            <div class="flex flex-col gap-3 text-justify items-center text-gray-700">
                <p> 
                    O Centro de Movimento Giselle Rodrigues Apresenta: Dia 20 de Dezembro de 2024, no Teatro Jaber Xaud.
                </p>
                <p class="underline decoration solid text-gray-900">
                    Sessões: 17hrs ou 19hrs
                </p>
            </div>

            <div class="flex flex-row gap-10 size-48 items-center m-5">
                <NuxtImg
                    src="/img/img-news-natal-show.jpeg"
                    class="rounded-md"
                />

                <span class="font-mono italic">
                    Em breve...
                </span>
            </div>
        </div>
    </section>
</template>
