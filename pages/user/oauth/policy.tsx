import Checkbox from '../../../components/Policy/Checkbox';

const policy = () => {
    const data = [
        {
            id: 'servicePolicy',
            link: 'https://www.notion.so/depromeet/bac78d41379c4c8181532b3e1412ef10',
            label: '서비스 이용 약관',
        },
        {
            id: 'privacyPolicy',
            link: 'https://www.notion.so/depromeet/9b3b0e70be744bd889f154c06f7c2933',
            label: '개인정보 수집 및 이용동의',
        },
    ];

    return data.map((item) => (
        <Checkbox key={item.id} id={item.id} link={item.link}>
            {item.label}
        </Checkbox>
    ));
};

export default policy;
