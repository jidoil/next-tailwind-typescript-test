import NavBar from "../components/NavBar";
import Head from "next/head";

function CampsPage() {
    console.log('About Render')
    return (
        <>
            <main>
                <h1>부트캠프 리스트</h1>
            </main>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            코스 이름
                        </th>
                        <th scope="col" className="px-6 py-3">
                            과정
                        </th>
                        <th scope="col" className="px-6 py-3">
                            모집 상태
                        </th>
                        <th scope="col" className="px-6 py-3">
                            비용
                        </th>
                        <th scope="col" className="px-6 py-3">
                            수업장소
                        </th>
                        <th scope="col" className="px-6 py-3">
                            모집 마감일
                        </th>
                        <th scope="col" className="px-6 py-3">
                            개강일
                        </th>
                        <th scope="col" className="px-6 py-3">
                            종강일
                        </th>
                        <th scope="col" className="px-6 py-3">
                            기간
                        </th>
                        <th scope="col" className="px-6 py-3">
                            파트타임
                        </th>
                        <th scope="col" className="px-6 py-3">
                            출석요일
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            애플 아카데미
                        </th>
                        <td className="px-6 py-4">
                            프론트엔드
                        </td>
                        <td className="px-6 py-4">
                            모집중
                        </td>
                        <td className="px-6 py-4">
                            무료
                        </td>
                        <td className="px-6 py-4">
                            서울, 종로
                        </td>
                        <td className="px-6 py-4">
                            2023-3-21
                        </td>
                        <td className="px-6 py-4">
                            2023-4-3
                        </td>
                        <td className="px-6 py-4">
                            2023-12-31
                        </td>
                        <td className="px-6 py-4">
                            6개월
                        </td>
                        <td className="px-6 py-4">
                            풀타임
                        </td>
                        <td className="px-6 py-4">
                            월~금
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            SSAFY
                        </th>
                        <td className="px-6 py-4">
                            프론트엔드
                        </td>
                        <td className="px-6 py-4">
                            모집중
                        </td>
                        <td className="px-6 py-4">
                            무료
                        </td>
                        <td className="px-6 py-4">
                            서울, 종로
                        </td>
                        <td className="px-6 py-4">
                            2023-3-21
                        </td>
                        <td className="px-6 py-4">
                            2023-4-3
                        </td>
                        <td className="px-6 py-4">
                            2023-12-31
                        </td>
                        <td className="px-6 py-4">
                            6개월
                        </td>
                        <td className="px-6 py-4">
                            풀타임
                        </td>
                        <td className="px-6 py-4">
                            월~금
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            소프트웨어 마에스트로
                        </th>
                        <td className="px-6 py-4">
                            프론트엔드
                        </td>
                        <td className="px-6 py-4">
                            모집중
                        </td>
                        <td className="px-6 py-4">
                            무료
                        </td>
                        <td className="px-6 py-4">
                            서울, 종로
                        </td>
                        <td className="px-6 py-4">
                            2023-3-21
                        </td>
                        <td className="px-6 py-4">
                            2023-4-3
                        </td>
                        <td className="px-6 py-4">
                            2023-12-31
                        </td>
                        <td className="px-6 py-4">
                            6개월
                        </td>
                        <td className="px-6 py-4">
                            풀타임
                        </td>
                        <td className="px-6 py-4">
                            월~금
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            42Seoul
                        </th>
                        <td className="px-6 py-4">
                            프론트엔드
                        </td>
                        <td className="px-6 py-4">
                            모집중
                        </td>
                        <td className="px-6 py-4">
                            무료
                        </td>
                        <td className="px-6 py-4">
                            서울, 종로
                        </td>
                        <td className="px-6 py-4">
                            2023-3-21
                        </td>
                        <td className="px-6 py-4">
                            2023-4-3
                        </td>
                        <td className="px-6 py-4">
                            2023-12-31
                        </td>
                        <td className="px-6 py-4">
                            6개월
                        </td>
                        <td className="px-6 py-4">
                            풀타임
                        </td>
                        <td className="px-6 py-4">
                            월~금
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
        );
}
export default CampsPage;