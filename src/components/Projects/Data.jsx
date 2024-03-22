import Codeems from '../../assets/codeems.png';
import Natours from '../../assets/natours.png';
import NextTask from '../../assets/next-task.png';
import TheWildOasis from '../../assets/the-wild-oasis.png';
import SliceHeaven from '../../assets/slice-heaver.png';
import Mapty from '../../assets/mapty.png';
import ComfyStore from '../../assets/comfy-sloth.png';
import Forkify from '../../assets/forkify.png';
import Bankist from '../../assets/bankist.png';

const projectsData = [
    {
        id: 1,
        title: 'Codeems: E-Commerce Solution',
        description:
            'Codeems is a comprehensive e-commerce solution crafted using the MERN stack. Seamlessly manage your online store with intuitive features for product management, order tracking, and secure payments. The admin dashboard offers control, allowing administrators to add new products, oversee orders, and monitor payments. Leveraging PayPal API integration, Codeems facilitates swift and secure transactions, guaranteeing a seamless shopping experience.',
        image: Codeems,
        link: 'https://github.com/Dhrutik-Patel/Codeems',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'PayPal API']
    },
    {
        id: 2,
        title: 'Natours: A Node.js Application',
        description:
            'Natours is a dynamic Node.js application for booking tours and managing travel itineraries. Users can explore captivating destinations and book tours effortlessly. With JWT-based authentication and integrated email functionality, Natours ensures security and timely updates. Stripe Gateway integration facilitates smooth and secure transactions for users and tour operators.',
        image: Natours,
        link: 'https://github.com/Dhrutik-Patel/natours-backend',
        tags: ['Node.js', 'Express', 'MongoDB']
    },
    {
        id: 3,
        title: 'NextTask: A Task Management App',
        description:
            'NextTask is a task management application built with Next.js, TypeScript, Tailwind CSS, and Mobx State Tree. Users can organize tasks with a sleek and intuitive interface. Local storage ensures seamless access across devices, enhancing productivity anytime, anywhere.',
        image: NextTask,
        link: 'https://github.com/Dhrutik-Patel/next-task',
        tags: ['Next.js', 'MongoDB', 'Mongoose']
    },
    {
        id: 4,
        title: 'The Wild Oasis: A React Application',
        description:
            'The Wild Oasis is a hotel management application powered by React and Supabase. It offers seamless cabin, booking, and guest management, ensuring exceptional guest experiences. Innovative solutions like HOCs and React Query integration redefine hotel management, streamlining operations and elevating guest satisfaction.',
        image: TheWildOasis,
        link: 'https://github.com/Dhrutik-Patel/the-wild-oasis',
        tags: ['React', 'Redux', 'React Router', 'React Query', 'Supabase']
    },
    {
        id: 5,
        title: 'Slice Heaven: A React Application',
        description:
            'Slice Heaven is a pizza ordering application built with React. It promises a seamless ordering experience with dynamic menus and a streamlined cart system. Users can customize orders and indulge in a mouthwatering experience, making Slice Heaven the go-to choice for pizza aficionados.',
        image: SliceHeaven,
        link: 'https://github.com/Dhrutik-Patel/Slice-Haven',
        tags: ['React', 'Redux', 'React Router']
    },
    {
        id: 6,
        title: 'Forkify: A JavaScript Application',
        description:
            'Forkify is a recipe web application crafted with JavaScript. Users can explore a vast array of recipes, search, modify, bookmark, and add them. Powered by Webpack and Babel, Forkify offers a seamless user experience with lightning-fast performance and cross-browser compatibility.',
        image: Forkify,
        link: 'https://github.com/Dhrutik-Patel/Forkify-A-recipe-app-for-searching-recipes.',
        tags: ['JavaScript', 'Webpack', 'Babel']
    },
    {
        id: 7,
        title: 'Comfy Store: A React Application',
        description:
            'Comfy Store is an ecommerce destination for high-quality furniture, powered by React, Redux, and React Router. It offers an immersive shopping experience with an extensive range of furniture options. Comfy Store transforms homes and offices into havens of comfort and sophistication.',
        image: ComfyStore,
        link: 'https://github.com/Dhrutik-Patel/Comfy-Sloth-Store',
        tags: ['React', 'Redux', 'React Router']
    },
    {
        id: 8,
        title: 'Mapty: A JavaScript Application',
        description:
            'Mapty is a dynamic JavaScript application for tracking workouts based on location. Users can record and monitor exercise sessions, visualize workout routes, and access insights and statistics. Mapty empowers users to strive towards fitness goals and unleash their full potential.',
        image: Mapty,
        link: 'https://github.com/Dhrutik-Patel/Mapty',
        tags: ['JavaScript', 'Webpack', 'Babel']
    },
    {
        id: 9,
        title: 'Bankist: A JavaScript Application',
        description:
            'Bankist is a JavaScript application simulating a virtual banking experience. Users can explore various functionalities such as logging into accounts, performing transactions, and managing finances. Bankist offers a comprehensive platform for JavaScript enthusiasts to refine their skills and deepen their understanding of web development.',
        image: Bankist,
        link: 'https://github.com/Dhrutik-Patel/Bankist-App',
        tags: ['JavaScript', 'Webpack', 'Babel']
    }
];

export default projectsData;
