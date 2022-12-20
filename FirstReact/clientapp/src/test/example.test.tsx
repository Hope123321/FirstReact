// SomeComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import SimpleBackdrop from '../components/SimpleBackdrop';


test('render component to test', () => {
    // 1. render 出要測試的元件
    render(<SimpleBackdrop />);

  // 2. 找到元件中某元素位置
    const button = screen.getByText(/Show backdrop/i);

    // 3. 對該元素進行操作和互動
    fireEvent.click(button);

    // 4. 檢視結果是否和預期相符
    const svg = screen.getByTestId('backdrop');
    expect(svg).toBeInTheDocument();
});