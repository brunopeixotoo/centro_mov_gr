<template>
    <footer class="flex flex-col items-center gap-2 pb-6 bg-gray-700">
        <div class="flex flex-col gap-2 p-6 text-white font-serif">
            <NuxtLink
                v-for="link in links"
                :key="link.id"
                :to="link.path"
                target="_blank"
                class="flex flex-row items-center gap-3"
            >
                <svg
                    :xmlns="link.svgItems.xlms"
                    :viewBox="link.svgItems.viewBox"
                    :class="link.svgItems.class"
                >
                    <path
                        :fill="link.svgItems.fill"
                        :d="link.svgItems.d"
                    />
                </svg>
                <span>
                    {{ link.name }}
                </span>
            </NuxtLink>
        </div>

        <NuxtLink
            v-for="item in adress"
            :key="item.id"
            class="text-white font-serif underline decoration"
            href="https://maps.app.goo.gl/q9Cs7juHuEzdu1Ut7"
            target="_blank"
        >
            <span>
                {{ item.dataAdress }}
            </span>
        </NuxtLink>
    </footer>
</template>

<script setup>

    const links = ref([
        {
            id: 1,
            path: 'https://api.whatsapp.com/message/7RTEMS5KJDPLC1?autoload=1&app_absent=0&fbclid=PAY2xjawGSBI9leHRuA2FlbQIxMAABpriXnrQQXb0AtZaDTp8jyb-Oxje5xUdCo3O7EfgdzhpOSGoaBc-sMas7YA_aem_LqtZ2lhBQLaHWJ9F-w0Qlg',
            svgItems: {
                xlms: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                class: 'h-5 w-5 ml-1',
                fill: 'currentColor',
                d: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28'
            },
            name: 'WhatsApp'
        },
        {
            id: 2,
            path: 'https://www.instagram.com/centrodemovimentogr?igsh=MW16dms2NWhsN3lhMA==',
            svgItems: {                
                xlms: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                class: 'h-5 w-5 ml-1',
                fill: 'currentColor',
                d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
            },
            name: 'Instagram'
        },
        {
            id: 3,
            path: 'mailto:gisellecarolrs@gmail.com',
            svgItems: {                
                xlms: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                class: 'h-5 w-5 ml-1',
                fill: 'currentColor',
                d: 'M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15'
            },
            name: 'Email'
        },
    ])


    const adress = ref([
        {
            id: 1,
            dataAdress: 'Boa Vista, Roraima - Brasil',
        },
        {
            id: 2,
            dataAdress: 'Av. via das Flores, 1614, Pricumã (piso superior)',
        },
        {
            id: 3,
            dataAdress: '95 98402-2275 ',
        }
    ])

</script>