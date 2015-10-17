from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'myexpertise.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^expertise_admin/', include('expertise_admin.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
