const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "Companies",
      [
        {
          company_id: uuidv4(),
          stipend_min: 0,
          stipend_max: 5000,
          location: "Delhi",
          name: "TCS",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(),
          date_posted: new Date(),
          skills: "[1,3,5,6,4]",
          job_type: "wfh",
          company_status: "IT Services",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          stipend_min: 10000,
          stipend_max: 20000,
          location: "Delhi",
          name: "Apple",
          number_of_positions: 2,
          total_applicants: 250,
          duration: 6,
          experience: "Expert",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          date_posted: new Date(),
          skills: '[1,3,4,7,8,10]',
          job_type: "wfh",
          company_status: "Sales",
          position: "SDE",
          company_logo:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "Bangalore",
          name: "Infosys",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
          date_posted: new Date(),
          skills: "[2,4,5,6,11]",
          job_type: "wfh",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "delhi",
          name: "TCS",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[2,4,5,7,11]",
          job_type: "in",
          company_status: "Marketing",
          position: "Back end developer",
          company_logo:
            "https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 0,
          stipend_max: 50000,
          location: "Kolkata",
          name: "Dell",
          number_of_positions: 5,
          total_applicants: 150,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[6,7,8,9]",
          job_type: "wfh",
          company_status: "Sales",
          position: "Full stack developer",
          company_logo:
            "https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 10000,
          stipend_max: 50000,
          location: "Ahmedabad",
          name: "TCS",
          number_of_positions: 5,
          total_applicants: 6,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[1,2,3,5]",
          job_type: "in",
          company_status: "Management",
          position: "Full stack developer",
          company_logo:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "Noida",
          name: "PW",
          number_of_positions: 5,
          total_applicants: 300,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[3,5,6,7,12]",
          job_type: "in",
          company_status: "Marketing",
          position: "Full stack developer",
          company_logo:
            "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 40000,
          stipend_max: 60000,
          location: "Agra",
          name: "TCS",
          number_of_positions: 5,
          total_applicants: 365,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[10,11,12,14]",
          job_type: "in",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },

        {
          stipend_min: 50000,
          stipend_max: 100000,
          location: "Mohali",
          name: "Bento",
          number_of_positions: 5,
          total_applicants: 605,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[1,2,3,9,13]",
          job_type: "wfh",
          company_status: "Marketing",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 10000,
          stipend_max: 50000,
          location: "Indore",
          name: "Twitter",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[5,6,7,8,1]",
          job_type: "in",
          company_status: "Designing",
          position: "Full stack developer",
          company_logo:
            "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "Chennai",
          name: "Netflix",
          number_of_positions: 5,
          total_applicants: 105,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[1,5,7,9,12]",
          job_type: "wfh",
          company_status: "Marketing",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 10000,
          stipend_max: 60000,
          location: "Pune",
          name: "Microsoft",
          number_of_positions: 5,
          total_applicants: 625,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[1,2,4,6]",
          job_type: "wfh",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://www.rd.com/wp-content/uploads/2019/01/Dell.jpg?fit=700,700",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "Chandigarh",
          name: "Flipkart",
          number_of_positions: 5,
          total_applicants: 5,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[6,8,9,11,5]",
          job_type: "in",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 30000,
          location: "Chennai",
          name: "Gravity",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[3,5,6,8,9,12,14]",
          job_type: "wfh",
          company_status: "Designing",
          position: "Full stack developer",
          company_logo:
            "https://www.rd.com/wp-content/uploads/2019/01/Dell.jpg?fit=700,700",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 80000,
          location: "Mumbai",
          name: "Amazon",
          number_of_positions: 5,
          total_applicants: 185,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[5,6,7,9,10]",
          job_type: "wfh",
          company_status: "Marketing",
          position: "Full stack developer",
          company_logo:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 20000,
          stipend_max: 50000,
          location: "Delhi",
          name: "Marvel",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: '[2,4,5,7,10]',
          job_type: "in",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },

        {
          stipend_min: 10000,
          stipend_max: 25000,
          location: "Indore",
          name: "Meta",
          number_of_positions: 5,
          total_applicants: 250,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[3,5,6,7,10]",
          job_type: "in",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 55500,
          stipend_max: 70000,
          location: "Kolkata",
          name: "Amazing",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "full",
          expiry_date: new Date(
            new Date().getTime() + 10 * 24 * 60 * 60 * 1000
          ),
          date_posted: "2023/06/25 03:06:36",
          skills: "[1,3,5,7,11]",
          job_type: "wfh",
          company_status: "IT services",
          position: "Full stack developer",
          company_logo:
            "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
        {
          stipend_min: 30000,
          stipend_max: 90000,
          location: "Pune",
          name: "Valorant",
          number_of_positions: 5,
          total_applicants: 65,
          duration: 2,
          experience: "Intermediate",
          timing: "part",
          expiry_date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
          date_posted: "2023/06/25 03:06:36",
          skills: "[4,7,9,10,11]",
          job_type: "wfh",
          company_status: "Management",
          position: "Full stack developer",
          company_logo:
            "https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg",
          about_us:
            " We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.",
          requie:
            '["Someone who can work in a fast-paced startup environment", "Good understanding of ReactJs, HTML, SCSS (styling is important),", "Javascript Good communication is a must-have for this role", "Hardworking & Curious to learn/implement new things is what I prefer personally"]',
          respo:
            '["Write clean, manageable code and follow standard coding practices", "Write quality code with a clean UI/UX view ", "Work with the tech & non-tech teams to create a meaningful product for users", "Capable to build a feature, testing, and deploying a feature on the production server"]',
          createdAt: new Date(),
          updatedAt: new Date(),
          company_id: uuidv4(),
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Companies", null);
  },
};
