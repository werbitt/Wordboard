namespace :coffee do
	namespace :watch do
		desc "Watch src/lib"
		task :lib do
			system "coffee -o lib/ -wc src/lib/"
		end

		desc "Watch src/test"
		task :test do
			system "coffee -o test/ -wc src/test/"
		end
	end
end

desc "Watch coffeescript files"
multitask :watch => ['coffee:watch:lib', 'coffee:watch:test']
