let filterButtons = document.querySelectorAll('.filter__button');
let projects = document.querySelectorAll('.projects__item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        let textCategory = button.textContent;

        projects.forEach(project => {
            let projectCategory = project.querySelector('.projects__description').textContent;

            // switch(textCategory) {
            //     case 'Усі':
            //         project.style.display = 'block';
            //         break;
            //     case 'Веб-сайти':
            //         if(projectCategory.includes('Веб-сайт')){
            //             project.style.display = 'block';
            //         }
            //     break;
            //     case 'Додатки':
            //         if(projectCategory.includes('Додаток')){
            //             project.style.display = 'block';
            //         }
            //     break;
            //     case 'Дизайн':
            //         if(projectCategory.includes('Дизайн')){
            //             project.style.display = 'block';
            //         }
            //     break;
            //     case 'Маркетинг':
            //         if(projectCategory.includes('Маркетинг')){
            //             project.style.display = 'block';
            //         }
            //     break;
            //     default:
            //         project.style.display = 'none';
            // }

            if(textCategory === 'Усі') {
                project.style.display = 'block';  
              } else if (textCategory === 'Веб-сайти' && projectCategory.includes('Веб-сайт')) {
                project.style.display = 'block';
              } else if (textCategory === 'Додатки' && projectCategory.includes('Додаток')) {
                project.style.display = 'block';
              } else if (textCategory === 'Дизайн' && projectCategory.includes('Дизайн')) {
                project.style.display = 'block';  
              } else if (textCategory === 'Маркетинг' && projectCategory.includes('Маркетинг')) {
                project.style.display = 'block';  
              }else {
                project.style.display = 'none';
              }
        })
    })
})