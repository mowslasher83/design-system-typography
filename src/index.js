export const Typography = ({ variant, children }) => {
  const variants = {
    h1: { fontSize: '2.5em', fontWeight: 'bold' },
    body: { fontSize: '1em', fontWeight: 'normal' },
    // thêm các kiểu khác nếu cần
  };

  const style = variants[variant] || variants.body;

  return <div style={style}>{children}</div>;
};
