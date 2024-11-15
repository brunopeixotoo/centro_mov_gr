<template>
    <section>
        <NuxtImg
            src="/img/img-banner-school.jpeg"
            class="w-full" alt="Imagem Cia"
        />

        <h1 class="uppercase font-bold text-2xl m-10">
            Novidades
        </h1>

        <div
            v-for="item in newsData"
            :key="item.id"
            class="flex flex-col gap-5 m-10 drop-shadow-lg"
        >
            <h1 class="font-semibold text-gray-900 text-lg mt-5">
                {{ item.label }}
            </h1>
            <div class="flex flex-col gap-3 text-itemustify text-gray-700">
                <p> 
                    {{ item.description }}
                </p>
                <p class="text-gray-900 font-semibold">
                    {{ item.section }}
                </p>
                <span class="text-gray-900 underline decoration solid cursor-pointer hover:text-sky-700">
                    Comprar ingresso
                </span>
            </div>
            
            <NuxtImg
                :src="item.url_img"
                class="m-6 rounded-md"
            />
        </div>

    </section>
</template>

<script setup>

    const newsData = ref([
        {
            id: 0,
            label:'Um Encanto de Natal',
            description:'O Centro de Movimento Giselle Rodrigues Apresenta: Dia 20 de Dezembro de 2024, no Teatro itemaber Xaud.',
            section:'Sessões: 17hrs ou 19hrs',
            url_img: '/img/img-news-natal-show.jpeg'
        }
    ])

</script>
