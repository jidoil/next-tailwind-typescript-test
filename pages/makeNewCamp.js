import {useState} from "react";


function MakeNewCamp({ camps }) {
    console.log('About Render')
    const [formData, setFormData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const jsonData = {};
        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        // JSON 데이터를 상태에 저장 또는 서버로 전송 등의 작업 수행
        setFormData(jsonData);

        const response = await fetch('/api/addCamp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        if (response.ok) {
            alert('Form data saved successfully');
        } else {
            alert('Error saving form data');
        }
    };
    console.log(formData)
    console.log(camps)

    return (
        <>
            <div className="flex justify-center">
                <form className="w-full max-w-lg" action="/camps" method="post" onSubmit={handleSubmit}>

                    {/*부트 캠프 이름*/}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-name">
                                부트캠프 이름
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-name" name="bootcamp-name" type="text" placeholder="새로운 부트캠프" />
                            <p className="text-red-500 text-xs italic">입력해 주세요.</p>
                        </div>
                    </div>

                    {/*부트 캠프 과정*/}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="mb-4 font-semibold text-gray-700 dark:text-white text-xs">부트캠프 과정</p>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="frontend-checkbox-list" name="frontend-checkbox-list" type="checkbox" value="frontend"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="frontend-checkbox-list"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frontend</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="backend-checkbox-list" name="backend-checkbox-list" type="checkbox" value="backend"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="backend-checkbox-list"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Backend</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="devops-checkbox-list" name="devops-checkbox-list" type="checkbox" value="devops"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="devops-checkbox-list"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Devops</label>
                                </div>
                            </li>
                            <li className="w-full dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="iot-checkbox-list" name="iot-checkbox-list" type="checkbox" value="iot"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="iot-checkbox-list"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">IoT</label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 비용 */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-cost">
                                비용
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-cost" name="bootcamp-cost" type="number" placeholder="0" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="cost-kdigital-checkbox-list" name="cost-kdigital-checkbox-list" type="checkbox" value="kdigital"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="cost-kdigital-checkbox-list"
                                               className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">KDT</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="cost-checkbox-list" name="cost-checkbox-list" type="checkbox" value="free"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="cost-checkbox-list"
                                               className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">무료</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="cost-checkbox-list" name="cost-checkbox-list" type="checkbox" value="cost"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="cost-checkbox-list"
                                               className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">유료</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 수업 장소 */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-address">
                                캠프 위치
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-cost" name="bootcamp-address" type="address" placeholder="서울특별시..." />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="onoff-checkbox-list" name="onoff-checkbox-list" type="checkbox" value="online"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="onoff-kdigital-checkbox-list"
                                               className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">온라인</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="onoff-checkbox-list" name="onoff-checkbox-list" type="checkbox" value="offline"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="onoff-kdigital-checkbox-list"
                                               className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">오프라인</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*부트 캠프 시작일*/}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-start-date">
                                부트캠프 시작일
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-start-date" name="bootcamp-start-date" type="text" placeholder="1900-01-01" />
                            <p className="text-red-500 text-xs italic">ex) 1984-01-01</p>
                        </div>
                    </div>

                    {/*부트 캠프 마감일*/}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-end-date">
                                부트캠프 마감일
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-end-date" name="bootcamp-end-date" type="text" placeholder="1900-01-01" />
                            <p className="text-red-500 text-xs italic">ex) 1984-01-01</p>
                        </div>
                    </div>

                    {/*부트 캠프 기간*/}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="bootcamp-length">
                                부트캠프 총기간
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="bootcamp-length" name="bootcamp-length" type="text" placeholder="6개월" />
                        </div>
                    </div>

                    {/* 수업 방식 */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="mb-4 font-semibold text-gray-700 dark:text-white text-xs">파트타임</p>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="parttime-checkbox-list" name="parttime-checkbox-list" type="checkbox" value="파트타임"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="parttime-checkbox-list"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">풀타임</label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 수업 방식 */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="mb-4 font-semibold text-gray-700 dark:text-white text-xs">수업 방식</p>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="course-type" name="course-type" type="checkbox" value="onlinelive"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="course-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">온라인 라이브</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="course-type" name="course-type" type="checkbox" value="offlinelive"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="course-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">오프라인 라이브</label>
                                </div>
                            </li>

                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="course-vod" name="course-vod" type="checkbox" value="VOD"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="course-vod"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VOD</label>
                                </div>
                            </li>

                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="course-record" name="course-record" type="checkbox" value="record"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="course-record"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">녹화본 제공</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="course-record" name="course-record" type="checkbox" value="no-record"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="course-record"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">녹화본 미제공</label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 프로젝트 */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="mb-4 font-semibold text-gray-700 dark:text-white text-xs">프로젝트</p>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="project-type" name="project-type" type="checkbox" value="team"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="project-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">팀 프로젝트</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="project-type" name="project-type" type="checkbox" value="self"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="project-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">개인 프로젝트</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="project-type" name="project-type" type="checkbox" value="team"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="project-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">팀프로젝트</label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 운영 기업 */}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="host">
                                운영 기업
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="host" name="host" type="text" placeholder="운영 기업" />
                            <p className="text-red-500 text-xs italic">입력해 주세요.</p>
                        </div>
                    </div>

                    {/* 지원 자격 */}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="condition">
                                지원 자격
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="condition" name="condition" type="text" placeholder="지원 자격" />
                            <p className="text-red-500 text-xs italic">입력해 주세요.</p>
                        </div>
                    </div>

                    {/* 선수 학습 */}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                                   htmlFor="host">
                                선수 학습
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="pre-requisite" name="pre-requisite" type="text" placeholder="선수 학습" />
                            <p className="text-red-500 text-xs italic">입력해 주세요.</p>
                        </div>
                    </div>

                    {/* 선발 절차 */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="mb-4 font-semibold text-gray-700 dark:text-white text-xs">선발 절차</p>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="tuition" name="tuition" type="checkbox" value="coding"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="project-type"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">코딩 테스트</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="tuition" name="tuition" type="checkbox" value="interview"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="tuition"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">면접</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="tuition" name="tuition" type="checkbox" value="no-test"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="tuition"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">없음</label>
                                </div>
                            </li>
                        </ul>
                    </div>


                    {/* 제출 버튼 */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            제출
                        </button>
                    </div>
                </form>
            </div>

        </>
        );
}
export default MakeNewCamp;