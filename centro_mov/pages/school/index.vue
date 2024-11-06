<template>
    <section class="flex flex-col">
        <NuxtImg
            :src="imgPageSchool.url_img1"
        />

        <div class="bg-yellow-400">
            <section class="flex flex-col gap-5 m-8">
                <span class="uppercase font-bold text-lg text-black">
                    {{ textSchool.label }}
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
                    class="w-full my-5 rounded"
                />
            </section>
        </div>

        <hr>

        <div class="bg-white">
            <section class="flex flex-col gap-10 m-8">
                <span class="uppercase font-bold text-lg text-gray-700">
                    {{ textTeacher.label }}
                </span>

                <div class="flex flex-col items-center gap-5">
                    <NuxtImg
                        :src="imgTeacher.url_img1"
                        class="rounded-full"
                    />

                    <div class="flex flex-col items-center">
                        <span class="font-bold text-lg text-gray-700">
                            {{ textTeacher.name_teacher1 }}
                        </span>
                        <span class="text-sm">
                            {{ textTeacher.text_teacher1 }}
                        </span>
                    </div>
                </div>

            </section>
        </div>
    </section>
</template>

<script setup>

    const textSchool = ref({
        label: 'Nosso ensino',
        text1: 'Nosso ensino é baseado na metodologia russa da escola VAGANOVA. A partir dele, construímos um programade aulas e orientamos a nossa equipe através de reuniões periódicas. Ao longo do ano, uma programação intensa, para além das aulas, alimenta o prazer dos alunos pela dança epelas artes em geral: desde o convívio com o Centro de Movimento Giselle Rodrigues até a realização de Mostras e Aulas Públicas. Celebramos o encerramento do ano com a criação de um grande espetáculo apresentado em um teatro. Para os níveis adiantados oferecemos um curso pré-profissional, com aulas diárias, carga horária ampliada e um programa completo com alongamento, técnica de pontas, técnica clássica, preparação física e repertório.',
        text2: 'Para quem deseja se profissionalizar, incluímos em nossa metodologia o conhecimento do repertório da Companhia de Dança Giselle Rodrigues, criamos exercícios inspirados na bagagem artística da CIA a fim de fortalecer nosso elo com a nossa principal identidade artística, assim como, originar uma didática própria e contemporânea. Para isso, fazemos um trabalho de acompanhamento, para selecionar os alunos que mais se destacaram para estagiar na Companhia de Dança Giselle Rodrigues, ganhando assim uma imersão no universo profissional, assistindo a ensaios, conhecendo bastidores, coreografias, figurinos e tudo aquilo que envolve a preparação de um espetáculo de grande porte.',
    })

    const imgPageSchool = ref({
        url_img1: '/img/img-kids.jpeg',
        url_img2: '/img/img-cia-menu-kids.jpeg',
        url_img3: '/img/img-cia-alunos.jpeg',
    })

    const textTeacher = ref({
        label: 'Nosso time',
        name_teacher1: 'Giselle Caroline Rodrigues da Silva',
        text_teacher1: 'ballet juvenil, adulto e profissionalizante',
    })

    const imgTeacher = ref({
        url_img1: '/img/img-gisa-teacher.jpeg',
    })

</script>