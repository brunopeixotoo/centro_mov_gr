<template>
    <nav class="w-full bg-gray-800 p-5">
        <div class="flex w-full justify-between items-center">
            <ul class="flex items-center gap-4">

                <li class="flex gap-5">
                    <NuxtLink
                        v-for="item in navGateSolicitations"
                        :key="item.id"
                        :to="item.path" 
                        class=" text-white hover:text-gray-400"
                    >
                        {{ item.label }}
                    </NuxtLink>
                </li>

                <li class="relative"> 
                    <button 
                        class=" text-white hover:text-gray-400 flex items-center"
                        @click="toggleDropdown"
                    >
                        Mais
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5 ml-1" fill="none" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/>
                        </svg>
                    </button>

                    <ul v-if="isDropdownOpen" class="absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-50">
                        <li
                            v-for="item in navGateSolicitationsPlus"
                            :key="item.id"
                            class="p-2 hover:bg-gray-200"
                        >
                            <NuxtLink 
                                :to="item.path"
                                class="block"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>

    const navGateSolicitations = ref([
    { 
            id: 0,
            label: 'Home',
            path: '/',
        },
        { 
            id: 1,
            label: 'Sobre',
            path: '/about',
        },
    ])
    const navGateSolicitationsPlus = ref([
        { 
            id: 0,
            label: 'Ballet escola',
            icon: '',
            path: '/school'
        },
        { 
            id: 1,
            label: 'Corpo de baile',
            icon: '',
            path: '/master'
        },
        { 
            id: 2,
            label: 'Novidades',
            icon: '',
            path: '/news',
        },
        { 
            id: 3,
            label: 'Contato',
            icon: '',
            path: '/contact',
        },
    ])

    // const isMenuOpen = ref(false)
    const isDropdownOpen = ref(false)

    // const toggleMenu = () => {
    //     isMenuOpen.value = !isMenuOpen.value
    // }

    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value
    }

    // const items = ref([
    //     {
    //         label: 'Home',
    //         icon: 'pi pi-home'
    //     },
    //     {
    //         label: 'Sobre',
    //         icon: 'pi pi-star'
    //     },
    //     {
    //         label: 'Mais',
    //         icon: 'pi pi-search',
    //         items: [
    //             {
    //                 label: 'Novidades',
    //                 icon: 'pi pi-bolt'
    //             },
    //             {
    //                 label: 'Corpo de Baile',
    //                 icon: 'pi pi-server'
    //             },
    //             {
    //                 label: 'Nosso ballet',
    //                 icon: 'pi pi-pencil'
    //             },
    //         ]
    //     },
    //     {
    //         label: 'Contact',
    //         icon: 'pi pi-envelope',
    //         items: [
    //             {
    //                 label: 'Email',
    //                 icon: 'pi pi-bolt',
    //                 path: '',
    //             },
    //             {
    //                 label: 'WhatsApp',
    //                 icon: 'pi pi-server',
    //                 path: '',
    //             },
    //             {
    //                 label: 'Instagram',
    //                 icon: 'pi pi-pencil',
    //                 path: '',
    //             },
    //         ]
    //     }
    // ]);
</script>
