<template>
    <section class="flex flex-col">
        <NuxtImg
            :src="imgPageSchool.url_img1"
        />

        <div class="bg-yellow-300">
            <section class="flex flex-col gap-5 m-8">
                <span class="uppercase font-bold text-2xl text-black">
                    {{ labels.label1 }}
                </span>

                <span class="text-black text-justify leading-relaxed">
                    {{ textSchool.text1 }}
                </span>
            </section>
        </div>

        <NuxtImg
            :src="imgPageSchool.url_img2" 
            class="w-full"
        />

        <div class="bg-gray-700">
            <section class="flex flex-col gap-5 m-8">
                <span class="text-white text-justify leading-relaxed">
                    {{ textSchool.text2 }}
                </span>

                <NuxtImg
                    :src="imgPageSchool.url_img3"
                    class="w-full my-5 rounded-md"
                />
            </section>
        </div>

        <hr>

        <div class="bg-white">
            <section class="flex flex-col gap-10 m-8">
                <span class="uppercase font-bold text-2xl text-gray-700">
                    {{ labels.label2 }}
                </span>

                <div
                    v-for="data in dataOurTime"
                    :key="data.id"
                    class="flex flex-col items-center gap-5 mb-5 drop-shadow-lg"
                >
                    <NuxtImg
                        :src="data.url_img"
                        class="rounded-full size-48"
                    />

                    <div class="flex flex-col items-center">
                        <span class="font-bold text-lg text-gray-700">
                            {{ data.name_teacher }}
                        </span>
                        <span class="text-sm text-center">
                            {{ data.text_teacher }}
                        </span>
                    </div>
                </div>

            </section>
        </div>
    </section>
</template>

<script setup>

    const labels = ref({
        label1: 'Nosso ensino',
        label2: 'Nosso time',
    })

    const textSchool = ref({
        text1: 'Nosso ensino é baseado na metodologia russa da escola VAGANOVA. A partir dele, construímos um programade aulas e orientamos a nossa equipe através de reuniões periódicas. Ao longo do ano, uma programação intensa, para além das aulas, alimenta o prazer dos alunos pela dança epelas artes em geral: desde o convívio com o Centro de Movimento Giselle Rodrigues até a realização de Mostras e Aulas Públicas. Celebramos o encerramento do ano com a criação de um grande espetáculo apresentado em um teatro. Para os níveis adiantados oferecemos um curso pré-profissional, com aulas diárias, carga horária ampliada e um programa completo com alongamento, técnica de pontas, técnica clássica, preparação física e repertório.',
        text2: 'Para quem deseja se profissionalizar, incluímos em nossa metodologia o conhecimento do repertório da Companhia de Dança Giselle Rodrigues, criamos exercícios inspirados na bagagem artística da CIA a fim de fortalecer nosso elo com a nossa principal identidade artística, assim como, originar uma didática própria e contemporânea. Para isso, fazemos um trabalho de acompanhamento, para selecionar os alunos que mais se destacaram para estagiar na Companhia de Dança Giselle Rodrigues, ganhando assim uma imersão no universo profissional, assistindo a ensaios, conhecendo bastidores, coreografias, figurinos e tudo aquilo que envolve a preparação de um espetáculo de grande porte.',
    })

    const imgPageSchool = ref({
        url_img1: '/img/img-kids.jpeg',
        url_img2: '/img/img-cia-menu-kids.jpeg',
        url_img3: '/img/img-cia-alunos.jpeg',
    })


    const dataOurTime = ref([
        {
            id: 0,
            url_img: '/img/img-gisa-teacher.jpeg',
            name_teacher: 'Giselle Caroline Rodrigues da Silva',
            text_teacher: 'Diretora do CMG, professora de ballet infantil, juvenil, adulto e profissionalizante',
        },
        {
            id: 1,
            url_img: '/img/img-prof-dany.jpeg',
            name_teacher: 'Danny Queiroz',
            text_teacher: 'Assistente e professora de ballet infantil',
        },
        {
            id: 2,
            url_img: '/img/img-prof-nelly.jpeg',
            name_teacher: 'Nelly Reis',
            text_teacher: 'Dança do ventre',
        },
        {
            id: 3,
            url_img: '/img/img-prof-brenon.jpeg',
            name_teacher: 'Brenon Lee',
            text_teacher: 'Professor de dança ministerial e contemporâneo',
        },
        {
            id: 4,
            url_img: '/img/img-prof-helo.jpeg',
            name_teacher: 'Heloise Ribeiro Feitosa',
            text_teacher: 'Professora de ballet infantil e assistente',
        },
        {
            id: 5,
            url_img: '/img/img-prof-lari.jpeg',
            name_teacher: 'Larissa Paz',
            text_teacher: 'Professora de ballet infantil',
        },
        {
            id: 6,
            url_img: '/img/img-prof-ballet.jpeg',
            name_teacher: 'Nyamille Ferreira',
            text_teacher: 'Professora de ballet clássico infantil e juvenil',
        },
        {
            id: 7,
            url_img: '/img/img-prof-kpop.jpeg',
            name_teacher: 'Maria Lobo',
            text_teacher: 'Professora de K-pop',
        },
    ])

</script>