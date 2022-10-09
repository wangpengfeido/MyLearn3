x = [-5:0.01:5];
y = x;

plot(x, y);
% 使用句柄设置刻度
set(gca, 'Xtick', [pi / 2, pi]);
set(gca, 'XTickLabel', {'-pi/2', 'pi'});
grid on;
