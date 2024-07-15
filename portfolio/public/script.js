document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Spring Boot App',
            description: '이 프로젝트는 Spring Boot를 사용하여 간단한 CRUD 애플리케이션을 개발한 것입니다. REST API를 통해 데이터를 관리하고, H2 데이터베이스를 사용합니다. 주요 기능은 사용자 생성, 읽기, 업데이트, 삭제 기능을 포함합니다. 또한, Spring Security를 사용하여 기본 인증 및 권한 부여를 구현했습니다.',
            language: 'Java',
            link: 'https://github.com/shinjaesang/spring-boot-app'
        },
        {
            title: 'Python Data Analysis',
            description: '이 프로젝트는 Pandas와 Matplotlib를 사용하여 데이터를 분석하고 시각화한 것입니다. 다양한 데이터셋을 사용하여 데이터 전처리, 분석, 시각화를 수행했습니다. 주요 기능은 데이터 클렌징, 통계 분석, 데이터 시각화(히스토그램, 박스 플롯, 산점도 등)입니다.',
            language: 'Python',
            link: 'https://github.com/shinjaesang/python-data-analysis'
        },
        {
            title: 'React Portfolio',
            description: '이 프로젝트는 React를 사용하여 개인 포트폴리오 웹사이트를 개발한 것입니다. 프로젝트 목록, 이력서, 연락처 정보 등을 포함한 동적 웹 페이지를 구현했습니다. 주요 기능은 React Router를 사용한 페이지 라우팅, Axios를 사용한 외부 API 호출, 반응형 디자인입니다.',
            language: 'JavaScript',
            link: 'https://github.com/shinjaesang/react-portfolio'
        }
        // 추가 프로젝트 설명
    ];

    const projectList = document.getElementById('project-list');
    const languageFilter = document.getElementById('language-filter');

    function displayProjects(filteredProjects) {
        projectList.innerHTML = '';
        filteredProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Language:</strong> ${project.language}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectList.appendChild(projectElement);
        });
    }

    displayProjects(projects);

    languageFilter.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const filteredProjects = selectedLanguage === 'all' ? projects : projects.filter(project => project.language === selectedLanguage);
        displayProjects(filteredProjects);
    });
});
